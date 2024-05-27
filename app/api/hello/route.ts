export const runtime = 'nodejs';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request: Request) {
    console.log(request);
    
    let d = new Date();
    d.setUTCDate(d.getUTCDate() + 1);
    console.log(d.toISOString().substr(0,10));

    return new Response(`Hello from ${process.env.VERCEL_REGION}, ${d.toISOString().substr(0,10)}`);
}
