
export default async function Responsedata(req: Request) {

    const { searchParams } = new URL(req.url);
    const Geminidata = searchParams.get('data');
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }