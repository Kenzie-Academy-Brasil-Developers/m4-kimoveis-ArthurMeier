import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683842178150 implements MigrationInterface {
    name = 'InitialMigration1683842178150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "addressId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "addressId" SET NOT NULL`);
    }

}
