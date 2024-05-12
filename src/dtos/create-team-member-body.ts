import { IsNotEmpty, Length } from 'class-validator'

// Usado para validar os dados recebidos em uma solicitação HTTP, antes de serem processados.
export class CreateTeamMemberBody{
    @IsNotEmpty()
    @Length(5, 100)
    name: string;
    
    @IsNotEmpty({
        message: "The member function should not the empty.",
    })
    function: string;
}