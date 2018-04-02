import Flux from '@4geeksacademy/react-flux-dash';

class MeetupActions extends Flux.Action {
    rsvpEventPositively(id){
        this.dispatch('MeetupStore.rsvpEventPositively', id);
    }
    getMeetups(){
        fetch ('https://assets.breatheco.de/apis/meetup/meetups')
            .then((response) => {
                return response.json();
            })
            .then ((content) => {
                console.log(content.meetups[0].id);
                this.dispatch('MeetupStore.setEvent', content);
            })
            .catch(function(msg){
                console.log("Error!!",msg);
            });
    }
}
var meetupActions = new MeetupActions();
export default meetupActions;