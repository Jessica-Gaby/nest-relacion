/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn,Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, ManyToOne } from "typeorm";
import { AuthorEntity} from "./author.model";

@Entity ('songs', { schema: 'ventas' })

export class SongEntity {
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

    @ManyToOne(() => AuthorEntity, author => author.songs)
  authors: AuthorEntity [];

    @Column( 'varchar',{
        name:'title',
        nullable:false,
        comment:'Nombre de la cancion',
       
    })
    titleAT: string;
    
    @Column('integer',{
        name: 'releaseyear',
        nullable:false,
        comment: 'Año de lanzamiento de la cancion',
    })
    releaseyearAT:number;
    
    @Column ('varchar',{
        name:'gender',
        nullable:true,
        comment: 'Genero de la cancion',
    })
    genderAT:string;
    @Column('varchar',{
        name:'images',
        nullable:true,
        comment: 'Imagen de la cancion',
    })
    imagesAT:string;

}