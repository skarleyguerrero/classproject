import Flux from '@4geeksacademy/react-flux-dash';

export class MeetupStore extends Flux.Store {

    constructor(){
        super();
            this.state = {
                meetups:[],
                events:[]
            }
    }
    
    //Action Methods
    
    _setEvents (data){
        let tempState = this.state;
        tempState.events = data;
        this.setStoreState(tempState).emit();
    }
     
    _setMeetups (data){
      let tempState = this.state;
      tempState.meetups = data;
      this.setStoreState(tempState).emit();
    }
    
    _rsvpEventNo(id){
         let tempState = this.state;
         tempState.meetups.forEach((meetup)=>{
            meetup.events.forEach((event)=>{
                if(event.id===parseInt(id)){
                    event.rsvp="no";
                }  
            })   
             
        });
         
        this.setStoreState(tempState).emit();
     } 
    
    _rsvpEventYes(id){
         let tempState = this.state;
         tempState.meetups.forEach((meetup)=>{
            meetup.events.forEach((event)=>{
                if(event.id===parseInt(id)){
                    event.rsvp="yes";
                }  
            })   
             
        });
         
        this.setStoreState(tempState).emit();
    } 
    
    
    //Views methods
  
    getAllEvents(){
        let eventsToSend = this.state.events;
        eventsToSend.forEach((theEvent)=>{
            let theMeetup = this.state.meetups.find((meetup)=> {
                return parseInt(theEvent.meta_keys._meetup[0]) === meetup.ID;
            });
            theEvent.meetup = {};
            theEvent.meetup = theMeetup;
        });
        return eventsToSend;
    }   
        
    getEvent(id){
      let tempEvent = {};
        //for(var i=0; i<this.state.meetups.length; i++){
            for(var j=0; j< this.state.events.length ; j++){
                if(this.state.events[j].ID === parseInt(id) ){
                    let updatedEvent = {};
                    updatedEvent = this.state.events[j];
                    updatedEvent.meetup = {};
                    updatedEvent.meetup.id = this.state.events[j].meta_keys._meetup[0];
                    
                    
                    
                    updatedEvent.meetup.title = this.state.events[j].meta_keys._meetup[0];
                    return updatedEvent;
                }
            }
        }
    //}
    
    getMeetup(id){
       return this.state.meetups.find( (anELEMENT) => anELEMENT.id === parseInt(id));
    }
    
}

var meetupStore = new MeetupStore();
export default meetupStore;

