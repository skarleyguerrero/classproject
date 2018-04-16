import React from "react";
import ReactDOM from 'react-dom';


import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

export default class AccordionC extends React.Component {
    render() {
        const Example = () => (
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Simple title</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Complex title</h3>
                        <div>With a bit of description</div>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        );

    return (
        <div>
            <Example/>
        </div>
    );
  }
}

