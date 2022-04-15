import logo from './logo.svg';
import './App.css';

import PostCollection from './ui-components/PostCollection'

function App() {
  return (
    <PostCollection isPaginated itemsPerPage = {3}
    overrides = {{
      "Collection.SocialA[0]":{
        overrides : {
          "Read more" :{
            "as": 'a',
            "href" : "https://console.aws.amazon.com"
          }
        }
      }
    }}/>
  );
}

export default App;
