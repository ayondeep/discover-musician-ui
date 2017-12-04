export default function() {

  this.namespace = '/api';

  this.get('/musicians', function() {

    return {
      data: [{
        type: 'musicians',
        id: 'john-lennon',
        attributes: {
          "first-name": 'John',
          "last-name": 'Lennon',
          "musician-type": 'Guitarist',
          "dob": '10/9/1940'
        }
      }, {
        type: 'musicians',
        id: 'paul-mccartney',
        attributes: {
          "first-name": 'Paul',
          "last-name": 'McCartney',
          "musician-type": 'Lead Vocalist',
          "dob": '06/18/1942'
        }
      }, {
        type: 'musicians',
        id: 'george-harrison',
        attributes: {
          "first-name": 'George',
          "last-name": 'Harrison',
          "musician-type": 'Lead Guitarist',
          "dob": '02/25/1943'
        }
      }, {
        type: 'musicians',
        id: 'ringo-starr',
        attributes: {
          "first-name": 'Ringo',
          "last-name": 'Starr',
          "musician-type": 'Drummer',
          "dob": '07/07/1940'
        }
      }, {
        type: 'musicians',
        id: 'stuart-sutcliffe',
        attributes: {
          "first-name": 'Stuart',
          "last-name": 'Sutcliffe',
          "musician-type": 'Bassist',
          "dob": '06/23/1940'
        }
      }, {
        type: 'musicians',
        id: 'pete-best',
        attributes: {
          "first-name": 'Pete',
          "last-name": 'Best',
          "musician-type": 'Drummer',
          "dob": '09/24/1941'
        }
      }]
    }
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
