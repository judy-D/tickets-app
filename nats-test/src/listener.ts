import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { parse } from 'path';
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

const stan = nats.connect('ticketing', 
                           randomBytes(4).toString('hex'), 
                           {url: 'http://localhost:4222'}
                           )

stan.on('connect', () => {
    console.log('Listener connected to NATS');

    
    stan.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
    });

    new TicketCreatedListener(stan).listen();    


});

// These are signals of interrupt and terminate then client would close first (Graceful shutdown)
// Attention: In windows will not work, you need another terms to make it work
process.on('SIGINT', () =>  stan.close());
process.on('SIGTERM', () => stan.close());



