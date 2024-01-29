import logo from "../assets/small_logo.svg";
import ContactAdd from "./ContactAdd";
import { useEffect, useState } from "react";
import InteractionIndex from "./InteractionIndex";
import Dropdown from "./Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { fetchTiers, getUserTiers } from "../store/tiers";
import { getCurrentUser } from "../store/session";
import { fetchInteractions, getContactInteractions } from "../store/interactions";

const CONTACT_INFO_TEXT = "Contact Information";
const INTERACTION_NOTES_TEXT = "Interaction Notes";
const UNDERLINE_STYLE = "cursor-pointer border-solid border-b-4 border-green-900 m-5";
const NON_UNDERLINE_STYLE = "cursor-pointer m-5";

const ContactShow = ({contact = {}}) => {

  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const tiers = useSelector(getUserTiers(user.id));
  const interactions = useSelector(getContactInteractions(contact.id));
  const [columnOrder, setColumnOrder] = useState(0);
  const [contentChoice, setContentChoice] = useState(CONTACT_INFO_TEXT);

  useEffect(() => {
    dispatch(fetchTiers());
    dispatch(fetchInteractions());
  }, [dispatch])

  const chooseContent = (e) => {
    setContentChoice(e.target.innerText);
  }

  return (

    <div className="flex flex-col items-center align-center w-full bg-slate-200 p-5 h-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-2/3">
          <img className="w-12 h-12" src={logo} />
          <div className="flex flex-col">
            <h2>{contact.firstName ? contact.firstName + ' ' + contact.lastName : `Name`}</h2>
            <h3>{contact.title ? contact.title : `Title`}</h3>
            <h3>{contact.company ? contact.company : `Company`}</h3>
          </div>
        </div>
        <div className="flex flex-col w-1/5">
          <h4>Move to</h4>
          <Dropdown tiers={tiers} columnOrder={columnOrder} setColumnOrder={setColumnOrder}/>
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <button className="m-5">Close</button>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className={contentChoice === CONTACT_INFO_TEXT ? '' : ''}>
          <h4 onClick={chooseContent} className={contentChoice === CONTACT_INFO_TEXT ? UNDERLINE_STYLE : NON_UNDERLINE_STYLE}>Contact Information</h4>
        </div>
        <div>
          <h4 onClick={chooseContent} className={contentChoice === INTERACTION_NOTES_TEXT ? UNDERLINE_STYLE : NON_UNDERLINE_STYLE}>Interaction Notes</h4>
        </div>
      </div>
      {contentChoice === CONTACT_INFO_TEXT ? <ContactAdd contact={contact}/> : <InteractionIndex interactions={interactions}/>}
      
    </div>
  )

}


export default ContactShow;