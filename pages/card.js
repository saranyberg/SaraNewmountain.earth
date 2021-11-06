const Card = () => (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 mx-auto max-w-md w-full">
            <div className="absolute inset-3 bg-push shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-2 sm:rounded-lg"></div>
            <div className="relative p-4 bg-white shadow-lg sm:rounded-lg">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col pb-4">
                        <h1 className="font-bold text-xl">Sara Nyberg</h1>
                        <p>Young Climate Leader</p>
                        <a
                            href="mailto:sara.nyberg@pushsverige.se"
                            className="text-push"
                        >
                            sara.nyberg@pushsverige.se
                        </a>
                        <a
                            href="https://twitter.com/SaraNewmountain"
                            className="text-push"
                        >
                            @SaraNewmountain
                        </a>
                    </div>
                    <img
                        src="/assets/images/PUSH-Sverige_enkel.png"
                        alt="PUSH Sverige logo"
                        className="self-end h-12"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Card
