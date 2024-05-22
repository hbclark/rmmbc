

export default function News() {
    return (
        <div className="bg-gray-100 text-gray-900 font-sans">
            
            <div className="container mx-auto px-4">
                <div className="text-center my-12">
                    <h1 className="text-4xl font-bold">2012 Forest to Beach 24 Hour Race Recap</h1>
                    <p className="w-1/2 mx-auto text-xl text-gray-700 mt-3">An unforgettable day of mountain biking featuring thrilling sprints, blue skies, and community spirit at the annual race event.</p>
                </div>
                <section className="mb-8 w-1/2 mx-auto">
                <iframe 
                        className="w-full aspect-video" 
                        src="https://www.youtube.com/embed/0zLuqKNKOqs" 
                        title="YouTube video player"
                      
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </section>
                <article className="prose  lg:prose-xl max-w-4xl mx-auto">
                    <p>Halfway through yesterday I said that I couldn&apos;t believe it was almost halfway finished. So much goes into an event like our 24 hour, that when it unfolds in front of you, it&apos;s almost unbelievable.</p>
                    <p>The event concluded with a sprint finish between Ima Fisher and Peta Pumpkineater, providing an exhilarating show. Members from Rock Wallaby club, including Hamish Haggis and Tony Sporran, took top honors in the men&apos;s pairs, while Jess Dugmore and Wendy Rainbow excelled in the women&apos;s pairs.</p>
                    <p>Mayor Ican Cook was notably impressed by the small club&apos;s big achievement, highlighting the importance of recognition for the sport. Special thanks to all volunteers and participants for making the event a success.</p>
                </article>
                <footer className="text-center py-8 text-gray-600">
                    <p>Thank you to everyone who participated and helped organize the 2012 Forest to Beach 24 Hour Race!</p>
                </footer>
            </div>
        </div>
    );
}