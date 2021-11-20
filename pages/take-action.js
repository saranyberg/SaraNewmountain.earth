import Head from 'next/head'

import { BLOG_TITLE } from '../lib/constants'

import Container from '../components/Container'
import Header from '../components/Header'
import Layout from '../components/Layout'

const TakeAction = () => (
    <Layout>
        <Head>
            <title>{BLOG_TITLE}</title>
        </Head>
        <Header />
        <Container>
            <article className="prose lg:prose-xl mx-auto">
                <h1>Take action!</h1>
                <p>
                    Below you find a list with tips on how you can take action
                    to reduce your own carbon footprint, increase your positive
                    handprint, how you can be an active consumer, some
                    organisations you can get involved in, how you can change
                    the politics and what you can do at your workplace. Note
                    that these are just some examples - there are many other
                    things which you can do! I only write briefly about the few
                    examples here - but I will write several blog posts with
                    more information about what you can do!
                </p>
                <h2>Take action as an individual:</h2>
                <ul>
                    <li>
                        **Eat more plant based food** - to have the lowest food
                        footprint you eat only vegan food, but to stay within
                        the carbon budget for 1.5degC, you can eat meat ca once
                        per week. But then it should be organic and locally
                        produced. I am myself eating fish or meat only at
                        midsummer or Christmas, and my grandmothers' meatballs.
                        Otherwise always vegetarian, and much of the time even
                        vegan.
                    </li>
                    <li>
                        Do you fly sometimes? Don't do it. If you fly, these
                        emissions are one of the largest emission categories.
                        Instead, **go by train or bus**. I think this is much
                        more exciting, more social and you get to see some
                        beautiful landscapes! I have myself not flown for 2.5
                        years, and I see no reason taking the airplane within
                        Europe. In 2019, I made 9 travels to Europe, all of them
                        on the ground. The longest trip was 48 hours from
                        Stockholm to COP25 in Madrid (!).
                    </li>
                    <li>
                        Where is your money invested? You can make a large
                        difference through putting your money in climate or more
                        **sustainable funds**, **investing** in companies
                        installing solar PV cells in developing countries via
                        [Trine](https://trine.com/), or **buy stocks** directly
                        in companies. Or simply **donate money** to
                        organisations such as
                        [Greenpeace](https://www.greenpeace.org/international/)
                        or the [WWF](https://lp.panda.org/donate).
                    </li>
                </ul>
                <h2>Take action together with others:</h2>
                <ul>
                    <li>
                        **Get active in a youth organisation!** 1.1 In Sweden:
                        [PUSH Sweden](https://pushsverige.se/english/) ([PUSH
                        Sverige](https://pushsverige.se/), a Swedish youth
                        climate network);
                        [Fältbiologerna](https://www.faltbiologerna.se/) (a
                        Swedish youth environmental organisation). 1.2 On a
                        European level: [Youth and Environment
                        Europe](https://yeenet.eu/) (the largest independent
                        European network of environmental youth organizations);
                        [Generation Climate Europe](https://gceurope.org/)
                        (largest coalition of youth-led networks at the European
                        level). 1.3 On an international level/organisation in
                        several countries: [YOUNGO](http://youngoclimate.org/),
                        [Fridays for future](https://fridaysforfuture.org/)
                        (youth constituency of the UNFCCC); [Climate
                        Students](https://climatestudents.com/)
                    </li>
                    <li>
                        **Get active in an environmental organisation!** 2.1 In
                        Sweden: [Naturskyddsföreningen, the Swedish Society for
                        Nature
                        Conservation](https://www.naturskyddsforeningen.se/in-english/);
                        [Klimataktion](https://klimataktion.se/); 2.2 On an
                        international level/organisations existing in several
                        countries:
                        [Greenpeace](https://www.greenpeace.org/international/);
                        [WWF](https://wwf.panda.org/); [Extinction
                        Rebellion](https://rebellion.global/).
                    </li>
                    <li>
                        **Get active in a project or initiative!** [Climate
                        Reality
                        Project](https://www.climaterealityproject.org/);
                        [Climate Fresk](https://climatefresk.org/) (learn and
                        hold workshops about the causes and effects of climate
                        change!); [Hack for future](https://hackforfuture.org/);
                        [Hack for Earth](https://www.hackforearth.com/);
                        [Climatalk](https://climatalk.org/)
                    </li>
                </ul>
                <h2>Take action as an employee:</h2>
                <ul>
                    <li>
                        **Young and want to work with something climate
                        related?** Check out job postings and the communities of
                        Youth Climate Leaders, and Sustainergies!
                    </li>
                    <li>
                        **Are you ready to change to a more meaningful job/where
                        you can work more with sustainability?** We need people
                        from all backgrounds! Are you a coach, check out Climate
                        Change Coaches, are you a psychologist, you can join
                        Klimatpsykologerna (https://www.klimatpsykologerna.se/).
                        Engineer? Ingenjörer för miljön. Artister för miljön
                        (http://www.artisterformiljon.se/).
                    </li>
                    <li>
                        ** Do something in your current role!** Either what you
                        are actually working with, or make sure your workplace
                        is greener (more plants, recycle, organic food products,
                        print less, etc.), or - even better - suggest to the
                        management that the company shold calculate it's
                        environmental impact/carbon footprint, set climate
                        targets (preferably in line with science, see Science
                        Based Targets initiative), and develop an emissions
                        reduction strategy. If your company needs help with it,
                        my company South Pole is providing these services.
                    </li>
                </ul>
                <h2>Take action as a citizen:</h2>
                <ul>
                    <li>**Vote for a greener party!**</li>
                    <li>
                        **Get engaged in a party** - all parties need to become
                        greener!
                    </li>
                    <li>
                        **Put forward a suggestion** - in Sweden you can put
                        forward a citizens' suggestion (Medborgarförslag) or
                        similar, for which you can gather votes and it can be
                        brought up in the municipality.
                    </li>
                </ul>
            </article>
        </Container>
    </Layout>
)

export default TakeAction
