/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn,Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany } from "typeorm";
import { SongEntity } from "./song.model";

@Entity ('songs', { schema: 'ventas' })

export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
        id: string;
    
    @CreateDateColumn({    
        name:'creted_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    @OneToMany(() => SongEntity, songs => songs.authors)
  songs: SongEntity []; //atributo de tipo arreglo

    @Column( 'varchar',{
        name:'name',
        nullable:false,
        comment:'nombre del autor',
       
    })
    nameAT: string;

    @Column( 'varchar',{
        name:'nationality',
        nullable:false,
        comment:'nacionalidad del autor',
       
    })
    nationalityAT: string;
}