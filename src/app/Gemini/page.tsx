
export default function Responsedata(searchParams : { [key: string]: string | string[] | undefined }) {

    const Geminidata = searchParams.data;
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }