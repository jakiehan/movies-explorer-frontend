import React from 'react';
import './ApiRequestResponse.css';

const ApiRequestResponse = ({ requestResponse, okRequestResponse }) => {

  return (
    <div className="api-request-response">
      <span className={`api-request-response__message ${okRequestResponse && 'api-request-response__message_type_ok'}`}>
        {okRequestResponse ? okRequestResponse : requestResponse}
      </span>
    </div>
  );
};

export default ApiRequestResponse;
