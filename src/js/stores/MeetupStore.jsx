import Flux from 'react-flux-dash';
export class MeetupStore extends Flux.Store {
   


     constructor(){
         super();
         this.state = {
    "meetups": [
        {
        "id": 87, 
        "title": "Miami Tech Meetup", 
        "thumbnail": "http://lorempixel.com/output/technics-q-c-100-100-1.jpg", 
        "events": [
            {
                "id": 34,
                "title": "React How-To",
                "day": "SATURDAY, MARCH 10",
                "time": "5:00 PM",
                "image": "http://lorempixel.com/output/technics-q-c-700-500-3.jpg",
                "rsvp": false
            },{
                "id": 56,
                "title": "Music+Coding",
                "day": "SATURDAY, MARCH 17",
                "time": "2:00 PM",
                "image": "http://lorempixel.com/output/technics-q-c-700-500-5.jpg",
                "rsvp": false
            },{
                "id": 67,
                "title": "Hardware hacking 101",
                "day": "THURSDAY, MARCH 22",
                "time": "6:00 PM",
                "image": "http://lorempixel.com/output/technics-q-c-700-500-7.jpg",
                "rsvp": false
            }
        ]
    },{
        "id": 886, 
        "title": "Wordpress Meetup",
        "thumbnail": "http://lorempixel.com/100/100/technics/", 
        "events": [
            {
                "id": 384,
                "title": "Wordpress for dummies",
                "day": "MONDAY, MARCH 12",
                "time": "6:30 PM",
                "image": "http://lorempixel.com/700/500/technics/",
                "rsvp": false
            },{
                "id": 776,
                "title": "Wordpress API",
                "day": "SATURDAY, MARCH 17",
                "time": "2:00 PM",
                "image": "http://lorempixel.com/700/500/technics/",
                "rsvp": false
            },{
                "id": 5677,
                "title": "Wordpress Guttenberg",
                "day": "THURSDAY, MARCH 22",
                "time": "5:30 PM",
                "image": "http://lorempixel.com/700/500/technics/",
                "rsvp": false
            }
        ]
    },{
        "id": 123, 
        "title": "Cat Meetup",
        "thumbnail": "http://lorempixel.com/100/100/technics/", 
        "events": [
            {
                "id": 456,
                "title": "Cats and Coffee",
                "day": "MONDAY, MARCH 12",
                "time": "6:30 PM",
                "image": "http://lorempixel.com/700/500/technics/",
                "rsvp": false
            }
        ]
    }
    ]
};
         
     }
     
     
     getAllMeetups(){
         return this.state;
     }
    
    //  getAllMeetups(){
    //      let meetups = [];
         
    //      this.state.meetups.forEach( (meetup)=>{
    //          meetup = {};
    //          meetup.id = meetup.id;
    //          meetup.title= meetup.title;
    //      })
    //      return meetups;
    //  }
     
     getAllEvents(){
         let events = [];
         
         this.state.meetups.forEach((meetup)=>{
             meetup.events.forEach((event)=>{
                 event.meetup = {};
                 event.meetup.id = meetup.id;
                 event.meetup.title = meetup.title;
             })
             
            events =  events.concat(meetup.events)
         });
            return events;
     }   
    
    //this one finds the specific event and allows you to click and go to that specific meetup
    // getEvent(id){
    //     let tempEvent = {};
        
        // within meetups "find" and call it "meetup" you create variable then use the variable. Do you see below? Ok so we can do this and we can do a for loop shown below this
        // return this.state.meetups.find( (meetup) => {
        //     //let tempmeetup = meetups.events;
        //     tempEvent = meetup.events.find( (event) => {
        //         if (event.id === parseInt(id)){
        //             event.meetup = {};
        //             event.meetup.id = meetup.id;
        //             event.meetup.title = meetup.title;
        //             return event;
        //         }
        //     })
            
        //     return tempEvent != undefined;
            
        // });
        // return this.state.meetups.find( (meetup))
        
        getEvent(id){
          let tempEvent = {};
            for(var i=0; i<this.state.meetups.length; i++){
                
                for(var j=0; j< this.state.meetups[i].events.length ; j++){
                    
                    if(this.state.meetups[i].events[j].id === parseInt(id) ){
                        
                        let updatedEvent = {};
                        updatedEvent = this.state.meetups[i].events[j];
                        updatedEvent.meetup = {};
                        updatedEvent.meetup.id = this.state.meetups[i].id;
                        updatedEvent.meetup.title = this.state.meetups[i].title.id;
                        
                        return updatedEvent;
                }
            }
        }
    }
    
    // getMeetup(id) {
    //     let tempMeetup = {};
    //     for(var i=0; i<this.state.meetups.length; i++){
            
    //         if(this.state.meetups[i].id === parseInt(id) ){
                
    //             let updatedMeetup = {};
    //             updatedMeetup = this.state.meetups[i];
    //             updatedMeetup.meetup = {};
    //             updatedMeetup.meetup.id = this.state.meetups[i].id;
    //             updatedMeetup.meetup.title = this.state.meetups[i].title.id;
    //         return updatedMeetup;
    //         }   
    //     }
    // }
    
    getMeetup(id){
       return this.state.meetups.find( (anELEMENT) => anELEMENT.id === parseInt(id));
        
        //this.state.meetups[i].id === id
    }
    // can also do this.state.meetups.find( (element    =>{element.id===id});
    

        
         _rsvpEventPositively(id){
             let tempState = this.state;
             tempState.meetups.forEach((meetup)=>{
              meetup.events.forEach((event)=>{
                if(event.id===id){
                event.rspv="yes";
                }  
             })   
             
        });
         
            this.setStoreState(tempState).emit();
         } 
}

var meetupStore = new MeetupStore();
export default meetupStore;