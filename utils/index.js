export function isNull(a, field) {
  if (!a || a.includes(" ")) {
    throw new Error(`${field} tidak boleh ada spasi/kosong.`);
  }
}

export async function isExists(models, fieldDb, field) {
  const model = await models.findOne({ where: { [fieldDb]: field } });
  return !!model;
}

export function isSame(a, b, field) {
  if (a !== b) {
    throw new Error(`${field} tidak sama.`);
  }
}
