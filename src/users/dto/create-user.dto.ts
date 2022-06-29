import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: 'user@test.com', description: 'Email property'})
    @IsString({message: 'String should be provided'})
    @IsEmail({}, {message: 'Incorrect email provided'})
    readonly email: string

    @ApiProperty({example: 'user123', description: 'Password property'})
    @IsString({message: 'String should be provided'})
    @Length(4, 16, {message: 'Length should be min 4 and max 16'})
    readonly password: string
}