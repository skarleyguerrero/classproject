import Flux from '@4geeksacademy/react-flux-dash';


class MeetupActions extends Flux.Action {
   
    
    apiFetchEvents(){
        fetch ('https://wordpress-skarleyguerrero.c9users.io/wp-json/sample_api/v1/events')
            .then((response) => {
                return response.json();
            })
            .then ((content) => {
                if (typeof(content.code) !== "undefined") {
                    throw new Error(content.message);
                }
                this.dispatch('MeetupStore.setEvents', content);
            })
            .catch(function(msg){
                console.log("Error!!",msg);
            });
    }
    
    apiFetchMeetups(){
        fetch ('https://wordpress-skarleyguerrero.c9users.io/wp-json/sample_api/v1/meetups')
            .then((response) => {
                return response.json();
            })
            .then ((content) => {
                if (typeof(content.code) !== "undefined") {
                    throw new Error(content.message);
                }
                this.dispatch('MeetupStore.setMeetups', content);
            })
            .catch(function(msg){
                console.log("Error!!",msg);
            });
    }
    
    rsvpEventNo(id){
        this.dispatch('MeetupStore.rsvpEventNo', id);
    }
   
    rsvpEventYes(id){
        this.dispatch('MeetupStore.rsvpEventYes', id);
    }
    
}

var meetupActions = new MeetupActions();
export default meetupActions;