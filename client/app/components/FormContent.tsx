import { DataContext , useData} from "../contexts/GiveawayContext"


import ContactInfo from '../components/ContactInfo'
import InterestLevel from '../components/InterestLevel';
import PainArea from '../components/PainArea';
import WhyNotYet from '../components/WhyNotYet';
import Confirmation from '../components/Confirmation';


const FormContent = () => {
  const { step } = useData()

  console.log(step)

  return (
    <>
      {step === 1 && <ContactInfo />}
      {step === 2 && <PainArea />}
      {step === 3 && <WhyNotYet />}
      {step === 4 && <InterestLevel />}
      {step === 5 && <Confirmation />}
    </>
  )
}

export default FormContent;