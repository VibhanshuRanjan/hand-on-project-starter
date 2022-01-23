import React from 'react';
import ApiCard from '../apiCard/ApiCard';
import './AllApis.scss'

const AllApis = () => {
  return (
      <div className="allApis">
            <ApiCard photo="bgremove2.png" title="Background Remove" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="postman.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="api.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="h3.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="bgremove2.png" title="Background Remove" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="postman.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="api.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
            <ApiCard photo="h3.png" title="API Name" desc="The descriptipn of the API in quick brief and we will truncate it here..."/>
      </div>
  )
};

export default AllApis;
