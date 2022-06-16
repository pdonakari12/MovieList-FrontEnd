import { urlGenres } from "../endpoints"
import EditEntity from "../utils/EditEntity"
import { actorCreationDTO, actorDTO } from "./actor.model"
import ActorForm from "./ActorForm"
import {convertActorToFormData} from '../utils/formDataUtils';
import { transform } from "typescript";


export default function EditActor(){

    function transform(actor:actorDTO):actorCreationDTO{
        return {
            name:actor.name,
            pictureURL:actor.picture,
            biography:actor.biography,
            dateOfBirth:new Date(actor.dateOfBirth)
        }
    }
    return(
        <EditEntity<actorCreationDTO,actorDTO>
            url={urlGenres} indexURL="/actors" entityName="actor"
            transformFormData={convertActorToFormData}
            transform={transform}
            >
                {(entity,edit)=>
                <ActorForm model={entity}
                onSubmit={async values=>await edit(values)}
                
                />
               }

        </EditEntity> 
    )
}