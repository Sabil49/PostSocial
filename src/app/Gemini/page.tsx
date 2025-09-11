
export default async function Responsedata() {

    const params = new URLSearchParams(window.location.search);
    const Geminidata = params.get('data');
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }