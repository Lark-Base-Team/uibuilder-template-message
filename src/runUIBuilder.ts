//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.buttons('', ['Show message'], () => {
        uiBuilder.message.success('Hello world!')
    });
}