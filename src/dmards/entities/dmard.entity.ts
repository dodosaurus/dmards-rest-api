import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Dmard {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    date_of_registration: string;
}
