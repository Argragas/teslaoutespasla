import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Product {

    @PrimaryGeneratedColumn( 'uuid' )
    @Generated("uuid")
    id: string;

    @ApiProperty({
        example: "Disque A11",
        description: "name of this product",
        required: false,
    })
    @Column()
    nom: string;

    @ApiProperty({
        example: "119",
        description: "location of this product",
        required: false,
    })
    @Column()
    emplacement: string | null;

    @ApiProperty({
        example: "0",
        description: "sensitivity of this product \n 0 to 5, 0 no sensitivity - 5 very sensitive",
        required: false,
    })
    @Column()
    sensibilite: number | null;

}
