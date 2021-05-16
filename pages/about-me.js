import Head from 'next/head'

import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { BLOG_TITLE } from '../lib/constants'

export default function LearnMore() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{BLOG_TITLE}</title>
                </Head>
                <Header />
                <Container>
                    <article className="mb-32 prose lg:prose-xl mx-auto">
                        <h1>About me</h1>
                        <p>
                            My name is Sara Nyberg. 
                            I want to do everything I can, and as long as I can, to reduce the emissions of greenhouse gases which are contributing to the climate crisis we are in. 
                            I have been active for ten years in different environmental and climate organisations and have a degree in environmental and energy systems engineering.
                            
                            Since two years I'm working in Stockohlm, Sweden, as a consultant at the company South Pole in many different projects, to help companies reduce their emissions of greenhouse gases.
                            I'm mainly performing carbon footprint calculations, but m also supporting companies with climate action reporting (to CDP), to set Science Based Targets (SBTs) and to develop emission reduction strategies.
                            
                            In my free time I love to be in nature: skiing in winter, sailing in summer and hiking during large parts of the year.
                            Being in nature makes me feel much more connected with it, and I get to appreciate the beauty of it, increasing my will to take care of it.
                            I see it almost as a wonder to be able to drink water directly from a creek in the Swedish mountain areas, or to pick and eat an apple from an apple tree in the garden.
                            These small wonders are not possible in parts of the country and the world where water has been polluted by humans, or where we have used pesticides killing bees, limiting the pollination of apple tree flowers.
                            Therefore we humans need to change our relationship to nature: from seing it as a unlimited resource we can pollute and extract things from to something we need to respect and take care of.

                            [HUR FÅ IN BILD? BILDEN FR BESSEGGEN OK?]
                       </p>
                       <h2>Why SaraNewmountain.earth?</h2>
                        <p>
                            The direct translation of Nyberg to English is Newmountain.
                            To reach a wider audience I'm writing in English on this website, so to use the English translation of my name is more in line with this.
                            But I also love mountains! I love to be in nature, to move my body (hiking, skiing, etc.), and to admire views over vast landscapes.
                            The third reason to call this website SaraNewmountian.earth is to relate to the challenges we are facing on our earth.
                            You cam compare the challenge of tackling the climate crisis with climbing a tall mountain: It is very tough and needs a strong commitment, but it is not impossible. 
                            Every little step takes you closer to the goal. 
                            Reaching the top is a more concrete goal than avoiding more than 1.5°C global warming, but nevertheless both are worth fighting for.
                       </p>
                       <h2>Contact</h2>
                        <p>
                            Do you have any feedback on my posts or other content of my website?
                            I'd very much appreciate your thoughts, to know how I can improve my communication!
                            For the posts I have a lot of ideas, but it's nice to hear what you as a reader would be interested in reading about.
                            Email me/write to me via linkedin, or Instagram (?), (or twitter?)
                        </p>
                    
                        {/* <h2>Voluntary engagements and achievements - PER ENAGEMANG ELLER TIMELINE? SE MINA ACHIEVEMENTS I TODOIST</h2>
                        <ul>
                            <li>YES Europe - HUR GÖR JAG NÄSTA NIVÅ AV UNDERPUNKTER?</li>
                            <li>PUSH Sverige (PUSH Sweden)</li>
                            <li>YOUNGO (tech mech WG, TEC, CTCN)</li>
                        </ul> */}
                    </article>
                </Container>
            </Layout>
        </>
    )
}
