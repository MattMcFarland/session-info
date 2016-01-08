/** Dependencies **/
import {
  express,
  cookieParser,
  bodyParser,
  compression,
  session,
  request,
  info
} from './modules';


/** Test Modules **/
import {
  expect
} from 'chai';
import { describe,
  before,
  it
} from 'mocha';

const OK = (obj) => {
  return expect(obj).to.not.be.an('undefined');
};

describe('=> Session Info', function () {
  const app = express();
  var server;
  before(done => {
    app.use(compression({level: 9}));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
      secret: 'nyan cat',
      name: '___test',
      resave: true,
      saveUninitialized: false
    }));
    app.use(info());
    app.get('/', (req, res) => {
      res.status(200).send('ok');
    });
    server = app.listen(4567, done);
  });

  it('server is defined', () => {
    OK(server);
  });

  it('server response', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });


});


