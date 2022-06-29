import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/posts.model";
import { Role } from "src/roles/models/roles.model";
import { UserRoles } from "src/roles/models/user-role.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'user@test.com', description: 'Email property'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: 'randompassword123', description: 'Password property'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'false', description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean 

    @ApiProperty({example: 'SPAM', description: 'Reason for banning'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
    
    @HasMany(() => Post)
    posts: Post[]

}