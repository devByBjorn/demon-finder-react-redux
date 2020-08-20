import React from 'react'
import {
  ExplinationContainer,
  ExplinationItem,
  Paragrapgh
} from '../../styled/AddDemonExplainedStyled'

const AddDemonFormExplained = () => (
  <ExplinationContainer>
    <ExplinationItem>
      <h4>Give your demon a title</h4>
      <Paragrapgh>The title should capture your issue in a short and concise matter.
       </Paragrapgh>
      <Paragrapgh>
        <span>Exampel:</span> Eric is a trader who is having issues with revenge trading, a suitable title for his demon would be “Revenge Trading”. Easy.
       </Paragrapgh>
    </ExplinationItem>
    <ExplinationItem>
      <h4>What is the core issue of this demon? </h4>
      <Paragrapgh>This one is important. You should really sit down and think about what is making you act on the demands of this demon. Write it down.</Paragrapgh>
      <Paragrapgh>
        <span>Exampel:</span> When taking a loss, Eric feels an instant urge to make that lost money back, quickly. Not only dese he must make it back quickly, he also must make it back in that exact market. After some thinking he realises that he acts out of greed and out of fear of being wrong.
      </Paragrapgh>
    </ExplinationItem>

    <ExplinationItem>
      <h4>How will you manage this demon?</h4>
      <Paragrapgh>The demons will not go away. Not ever. Trying to ignore or oppress them is a recipe for disaster. What you need to do is to learn how to manage your demons. You need to learn to catch yourself in the act, when your demon is about to take control, and you need to have plan for those moments. </Paragrapgh>
      <Paragrapgh>
        I would suggest you write a plan of actions of how to prevent those moments from happening and also make up a plan what you will do when you lose control, because you will loose control, and the demon takes over.
      </Paragrapgh>
      <Paragrapgh>
        <span>Exampel:</span> Eric has made a two-step management plan of how to tackle his issue with revenge trading. <br />
        <br />
        <span>1. </span>To prevent revenge trading he has decided to keep statistics specifically for trades he is taking due to revenge trading. This will give him a clear picture of how much money he is loosing when acting on this demon. Eric knows that money is a good motivator and he beliiaves that seeing the actual amount in print will help him avoid this behaviour.
      </Paragrapgh>
      <Paragrapgh>
        <span>2. </span> When catching himself in the act of revenge trading, he will close the trade, winner or loser, turn of the screen and leave the desk for at least one hour. If, when back, he catches himself doing the same thing again, he will leave the desk for the day. The next day he will watch the markets but not allow himself to take any trades, no matter how good the setup.
      </Paragrapgh>
      <Paragrapgh>If Eric finds himself not living up to hos commitments, and constantly breaking his own rules, he is probably not cut out to be trader and should through away his money elsewhere. And so should you!</Paragrapgh>
    </ExplinationItem>
  </ExplinationContainer>
)


export default AddDemonFormExplained