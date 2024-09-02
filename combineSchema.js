const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, 'prisma/schemas');
const schemaFiles = fs.readdirSync(schemaDir).filter(file => file.endsWith('.prisma'));

let combinedSchema = '';


schemaFiles.forEach(file => {
    const schema = fs.readFileSync(path.join(schemaDir, file), 'utf8');
    combinedSchema = schema + '\n' + combinedSchema;
});

fs.writeFileSync(path.join(__dirname, 'prisma/schema.prisma'), combinedSchema);
