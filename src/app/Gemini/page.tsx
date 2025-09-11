
type Props = {
      searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
    };
export default async function Responsedata({ searchParams }: Props) {

    // Example for Next.js Server Components

    const resolvedSearchParams = await searchParams;
    const Geminidata = resolvedSearchParams.data;
    console.log('Geminidata:');
    console.log(JSON.parse(JSON.stringify(Geminidata)));
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }