import React from "react"
import { FAQStyle} from "./FAQStyle"
import { PerguntaFAQ } from "../../components/perguntaFAQ/perguntaFAQ"
import { NavTab } from "../../components/NavTab/NavTab"
import { Footer } from "../../components/Footer/Footer"

const FAQ = () => {
    return (
        <>
        <NavTab/>
        <FAQStyle>
            <h1>FAQ</h1>
            <PerguntaFAQ
        pergunta="How can I make a reservation?"
        resposta="You can easily make a reservation by visiting our website or contacting our customer service."
      />

      <PerguntaFAQ
        pergunta="What types of vehicles do you offer?"
        resposta="We offer a variety of vehicles including sedans, SUVs, vans, and more to suit your needs."
      />

      <PerguntaFAQ
        pergunta="Is insurance included in the rental?"
        resposta="Yes, basic insurance coverage is included in the rental cost. Additional coverage options are available."
      />

      <PerguntaFAQ
        pergunta="Can I modify or cancel my reservation?"
        resposta="Yes, you can modify or cancel your reservation through our website or by contacting our customer service."
      />

      <PerguntaFAQ
        pergunta="What do I need to bring when picking up the rental?"
        resposta="You'll need a valid driver's license, a credit card in the renter's name, and any additional identification requested."
      />
        </FAQStyle>
        <Footer/>
        </>
    )
}

export default FAQ;