/* eslint-disable eact/no-danger */

import React from 'react';

const innerHTML = `
<style>
  div#dom-example-root {
    margin: auto;
    width: 300px;
    background-color: white;
  }
  div#dom-example-root div {
    margin-left: 5px;
    padding: 5px;
    border: 1px solid black;
  }
</style>
<div id="dom-example-root">
  <div>
    <div>
      <div>
        uno
      </div>          
    </div>
    <div>
      dos
    </div>
  </div>
  <div>
    <div>
      <div>
        tres
      </div>
      <div>
        <div>
          <div>
            <div>
              cuatro
            </div>
          </div>
          <div>
            cinco
          </div>
        </div>
      </div>
    </div>
    <div>
      seis
    </div>
  </div>
  <div>
    siete
  </div>
</div>
`;

export default () => <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;
