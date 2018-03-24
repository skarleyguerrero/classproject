import Flux from 'react-flux-dash';

class MeetupActions extends Flux.Action {
    
    rsvpEventPositively(id){
        this.dispatch('MeetupStore.rsvpEventPositively', id);
    }
    
}

var meetupActions = new MeetupActions();
export default meetupActions;