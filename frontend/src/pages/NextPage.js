import React from 'react';

const NextPage = ({match}) => {
    return (
        <div>
            <h2>{match.params.id} 환영합니다!</h2>
        </div>
    )
}

export default NextPage;