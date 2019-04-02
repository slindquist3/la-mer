import React from 'react'
import './App.scss';
import $ from "jquery";
import Intro from "./Intro.js";
import Navbar from './Navbar.js'
import TalentModule from './common-components/TalentModule.js'
import Video from './common-components/Video.js'
import Ad from './common-components/Ad.js'
import IntroSubcopy from './IntroSubcopy.js'
import MiniAd from './MiniAd.js'
import Anchors from './Anchors.js'


class App extends React.Component {

  componentDidMount() {
    var hash = window.location.hash;
    if (hash !== '') {

      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({block:"center", behavior:"smooth"});
      }, 0);
    }
  }

  render() {

    var beeData = [{video: "FgF0WujpsP8",
                    quote: "With our selfcare, we are creating the conditions for our most awakened self to arise.",
                    thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q1.png",
                    name: "Bee Bosnak"},

                  {video: "VOvBAxCaxHA",
                   quote: "My whole routine is really based on making it ritualistic.",
                   thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q2.png",
                   name: "Bee Bosnak"},

                  {video: "lYf9k3irOWU",
                   quote: "If I don't take care of the self then who will, right?",
                   thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q3.png",
                   name: "Bee Bosnak"},

                  {video: "uq_R4z4dAoo",
                   quote: "My skincare goals are hydration and protecting my skin from irritations and to glow from the inside out.",
                   thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q4.png",
                   name: "Bee Bosnak"}],


        joshData = [{video: "ZF7EFxd9QfQ",
                       quote: "If you're doing selfcare and wellness for mind/body/spirit, why not do it for your face?",
                       thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q3.png",
                       name: "Josh Dixon"},

                    {video: "4vOzndcoCps",
                     quote: "The selfcare routine for me is striking a balance between work, play, travel, and relationships.",
                     thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q1.png",
                     name: "Josh Dixon"},

                    {video: "DwMq09ti87I",
                     quote: "I use a moisturizer and eye cream immediately after I get out of the shower.",
                     thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q2.png",
                     name: "Josh Dixon"},

                    {video: "fmpPEQO84kc",
                     quote: "I’m typically looking for something that allows oil control, a great moisturizer, and a protectant from the elements.",
                     thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q4.png",
                     name: "Josh Dixon"}],



        danielleData = [{video: "X9SCMQEvXKg",
                         quote: "When I get everything squared away I feel more prepared and more relaxed.",
                         thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q1.png",
                         name: "Danielle Gray"},

                         {video: "yJPxntNQdr8",
                          quote: "I use a serum to help protect my skin.",
                          thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q2.png",
                          name: "Danielle Gray"},

                        {video: "uGDasqojVYc",
                         quote: "It helps me in all areas of my life—with training, with professionalism, with jobs, with interviews, with photo shoots, anything.",
                         thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q3.png",
                         name: "Danielle Gray"},

                        {video: "Q0ASUcaXawc",
                         quote: "It’s a point of prevention and upkeep, making sure I stay on the path to confidence. My skin is a part of who I am.",
                         thumbnail: "https://furthermore-cdn.equinox.com/source-of-strength/static/media/LM_Q4.png",
                         name: "Danielle Gray"}];


    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Video video="euOJ3656cYU"
               still="https://furthermore-cdn.equinox.com/source-of-strength/static/media/hero-hero.png"/>
        <Anchors />
        <IntroSubcopy />
        <MiniAd />

        <TalentModule
          id="beesection"
          headshot="https://furthermore-cdn.equinox.com/source-of-strength/static/media/bee-retouch.jpg"
          name="Bee Bosnak: "
          heading="yoga and meditation"
          subcopy="Bee is a yoga and meditation teacher in New York City. “I got started with these two practices almost a decade ago when I was lost,” says Bosnak. The combination helped to heal her and to ultimately change her life for the better."
          secondImage="https://furthermore-cdn.equinox.com/source-of-strength/static/media/bee-main-retouch.jpg"
          collection={beeData}
          textCollection
          video="_bbIOlh0N1I"
          still="https://furthermore-cdn.equinox.com/source-of-strength/static/media/bee-hero.png"
          anchorId="beevideos"
          subcopyId="0"
         />

        <Ad quote="Taking care of my skin makes me feel stronger because I know I’m putting in the work to present a put-together self." source="Josh Dixon on selfcare" />

        <TalentModule
          id="joshsection"
          headshot="https://furthermore-cdn.equinox.com/source-of-strength/static/media/josh-port-retouch.jpg"
          name="Josh Dixon: "
          heading="community engagement"
          subcopy="Josh lives in Newport Beach, California. He’s a tech entrepreneur and former Team USA gymnast. But beyond his day job, he knows the value of giving back: “I’ve been very involved in non-profit LGBT advocacy, adoption and family planning equality initiatives (my sisters and I were all adopted), Boys and Girls Club of America, and Second Harvest Food Bank,” says Dixon, who also started scholarships for his middle school track and field program and a college scholarship for seniors from his high school."
          secondImage="https://furthermore-cdn.equinox.com/source-of-strength/static/media/josh-main-retouch.jpg"
          collection={joshData}
          video="eMNgkR8S4T8"
          still="https://furthermore-cdn.equinox.com/source-of-strength/static/media/josh-hero.png"
          anchorId="joshvideos"
          subcopyId="1"
        />

        <Ad quote="Having clear skin gives me so much confidence and, just like having strength, it helps me exude a different energy." source="Danielle Gray on selfcare"/>

        <TalentModule
          id="daniellesection"
          headshot="https://furthermore-cdn.equinox.com/source-of-strength/static/media/danielle-port-retouch.jpg"
          name="Danielle Gray: "
          heading="solo travel"
          subcopy="Danielle is a Los Angeles-based Tier 3+ trainer at Equinox, a gymnast, and a fitness model. For her, strength comes from stretching outside of her comfort zone. In particular, it comes from traveling by herself. “Getting lost, problem-solving, planning itineraries, and meeting transportation schedules all builds confidence in our independence,” says Gray. “We feel free which therefore makes us feel strong when we can people-watch at coffee shops, travel at our own pace, do things we want to do, and be completely present.”"
          secondImage="https://furthermore-cdn.equinox.com/source-of-strength/static/media/danielle-packing.jpg"
          collection={danielleData}
          video="95XXXB6NZcw"
          still="https://furthermore-cdn.equinox.com/source-of-strength/static/media/danielle-still.jpg"
          anchorId="daniellevideos"
          subcopyId="2"
         />
         <div className="black-background-padding"></div>

      </div>
    )
  }
}
export default App
