import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export const POST: APIRoute = async ({ request }) => {
  let email: string;
  
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }

  const { error } = await supabase.from('Subscribers').insert([{ email }]);
  console.log('Supabase error:', error);

  if (error) {
    if (error.code === '23505') {
      return new Response(JSON.stringify({ error: 'Already subscribed' }), { status: 409 });
    }
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};