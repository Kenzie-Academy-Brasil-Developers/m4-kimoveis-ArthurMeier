import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683843983204 implements MigrationInterface {
    name = 'InitialMigration1683843983204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "categoryId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0" UNIQUE ("categoryId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "categoryId" SET NOT NULL`);
    }

}
