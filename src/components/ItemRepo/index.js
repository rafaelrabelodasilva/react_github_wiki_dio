import React from "react";

import { ItemContainer } from './styles'

function ItemRepo({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer>
            <div className="repoContainer">
                <h3>{repo.name}</h3>
                <p>{repo.full_name}</p>
            </div>
            
            <div className="repoActionContainer">
                <button type="button" onClick={() => window.open(repo.html_url, '_blank')} className="link-button">
                    Ver repositório
                </button>             
                <button type="button" onClick={handleRemove} className="remover">Remover</button>
            </div>
        </ItemContainer>
    )
}

export default ItemRepo;