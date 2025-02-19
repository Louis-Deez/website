import Image from 'next/image';

import { Button } from '../utils/Button';

export const Donate = () => (
    <section className="bg-blue-darker h-160 sm:h-120 flex flex-row items-center">
        <div className="absolute w-full z-10 flex flex-row justify-center">
            <div className="md:w-3/4 xl:w-2/3 flex flex-col px-page text-center xl:text-left">
                <div>
                    <h1 className="text-5xl text-teal font-semibold">Donate</h1>

                    <p className="xl:w-2/3 text-lg sm:text-xl mt-6">
                        Contributions allow FlyByWire Simulations to provide better services for our users,
                        such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
                    </p>
                    <p className="xl:w-2/3 text-lg sm:text-xl mt-6">
                        We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.
                    </p>
                </div>

                <div className="mt-6 xl:divide-x divide-gray-400 xl:space-x-7 flex flex-col-reverse xl:flex-row items-center">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 text-xl font-bold bg-teal-light-contrast border-2 border-teal-light-contrast transition hover:bg-white hover:text-teal-light-contrast">
                            Donate
                        </Button>
                    </a>
                    <h2 className="max-w-prose text-teal-50 h-14 mb-7 xl:mb-0 xl:pl-7 flex flex-row items-center">
                        No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given.
                    </h2>
                </div>
            </div>
        </div>
        <div className="relative z-0 h-160 sm:h-120 object-cover w-screen opacity-10">
            <Image
                src="/img/donate.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </section>
);
