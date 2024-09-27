import { IsString } from "class-validator";

export class UpdateArtsistDto{
    name?:string;

    @IsString()
    role?:string;
    bio?:string;
    image_url?:string
}