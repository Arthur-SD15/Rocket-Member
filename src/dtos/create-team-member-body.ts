import { IsEmpty, Length } from 'class-validator'

export class CreateTeamMemberBody{
    @IsEmpty()
    @Length(5, 100)
    name: string;
    
    @IsEmpty({
        message: "The member function should not the empty.",
    })
    function: string;
}