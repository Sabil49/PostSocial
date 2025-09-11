
type Props = {
      searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
    };
export default async function Responsedata({ searchParams }: Props) {

    // Example for Next.js Server Components

    const resolvedSearchParams = await searchParams;
    const Geminidata = resolvedSearchParams.data;
      return (
        <div>
           {
            Geminidata ? Geminidata : 'Loading...'
          } 
        </div>
      );
    }