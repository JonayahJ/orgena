import React from 'react';
import { 
    TestimonialContainer,
    TestimonialH1,
    // TestimonialQ,
    TestimonialP,
    TestimonialSource,
    Logo
} from './TestimonialsElements';
import Grid from '@material-ui/core/Grid';

const Testimonials = () => {
    return (
        <TestimonialContainer>
            <Grid container>
                <Grid item sm={12}>
                    <TestimonialH1>What Our Clients Say</TestimonialH1>
                </Grid>
                {/* Testimonial 1 */}
                <Grid item sm={3}>
                    {/* <TestimonialQ>"</TestimonialQ> */}
                    <Logo src="../../images/Testimonial1.png" alt="Pickney Pocket logo" />
                </Grid>
                <Grid item sm={9}>
                    <TestimonialP>
                        What I enjoyed about the experience was that Herbert & Anwar took the time out to understand the ins and outs of my business to provide an overall synopsis of where I can improve my business from a financial aspect. In addition, they were very transparent & blunt through the entire process which I valued.
                    </TestimonialP>
                    <TestimonialSource>
                        Jhanielle Brown, Pickney Pocket
                    </TestimonialSource>
                </Grid>
                <br />

                {/* Testimonial 2 */}
                <Grid item sm={3}>
                    {/* <TestimonialQ>"</TestimonialQ> */}
                    <Logo src="../../images/Testimonial2.png" alt="Karter's Southern Sweets logo" />
                </Grid>
                <Grid item sm={9}>
                    <TestimonialP>
                    I had to chance to work with Anwar and Herbert on evaluating Karter’s Southern Sweets, my baking business, to have a better understanding of where to focus my efforts and how I can grow the business.  Their help was awesome!!!  We had a few introductory meetings, I shared 6 weeks of sales data, and we evaluated the expenses on several products.  Even with my limited data, Anwar & Herbert were able to provide useful insight and vision into things that I couldn’t see on my own.  They showed me where to shift my focus on desserts to make the most use of my time, while not sacrificing on profit.  Being a small business, I was excited that they were patient, but also willing to work with me in the current state of my business and to help me better focus where I could maximize the use of my time.  Since I’ve implemented some of the changes that they recommended, I’ve been able to better track my sales, reduce the mix of my offerings, all while increasing my sales.  I was also able to transition some offerings from yearly to seasonal, which improves my annual performance on all items. Thanks Herbert & Anwar, you really helped take my business to the next level.
                    </TestimonialP>
                    <TestimonialSource>
                        Korey Carter, Karter’s Southern Sweets
                    </TestimonialSource>
                </Grid>
                <br />

                {/* Testimonial 3 */}
                <Grid item sm={3}>
                    {/* <TestimonialQ>"</TestimonialQ> */}
                    <Logo src="../../images/Testimonial3.png" alt="HTW Health Navigation logo" />
                </Grid>
                <Grid item sm={9}>
                    <TestimonialP>
                        Orgena Consulting provided the supercharge necessary for my business to transition from latency to reality. Their expertise and personalized service allowed me to expand my business model and grow my client base. HTW Heath Navigation dba Careleidoscope.
                    </TestimonialP>
                    <TestimonialSource>
                        Telisa Lyons Washington, HTW Health Navigation
                    </TestimonialSource>
                </Grid>
                <br />

                {/* Testimonial 4 */}
                <Grid item sm={3} style={{marginTop: "-20px"}}>
                    {/* <TestimonialQ>"</TestimonialQ> */}
                    <Logo src="../../images/Testimonial4.png" alt="Lenox Skateware logo" />
                </Grid>
                <Grid item sm={9}>
                    <TestimonialP style={{marginTop: "-20px"}}>
                        I am a man of many passions. If I am not actively involved in projects or teams that satisfy those passions I tend to get anxious. Working with Orgena Consulting has helped me better manage the energy I expend across my endeavors. Their guidance empowers me to show up for the communities, teams, projects, and ideas I serve effectively.  The company's grounded mode of communication affords space for creativity and innovation while anchoring the process of creation in objectivity. Orgena Consulting exemplifies teaching a man to fish, however they also help provide fish as they teach. 
                    </TestimonialP>
                    <TestimonialSource>
                        Shane Garraway, Lenox Skateware
                    </TestimonialSource>
                </Grid>
            </Grid>
        </TestimonialContainer>
    )
}

export default Testimonials
