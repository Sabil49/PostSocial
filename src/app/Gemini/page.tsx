
export default async function Responsedata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const Geminidata = searchParams.data;
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }