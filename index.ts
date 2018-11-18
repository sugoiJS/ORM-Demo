import {PostModel} from "./models/post.model";

async function main() {
    await FindModel().then(res => console.log("Amount of results %s", res.length));
    await FindModel(11).then(console.log);
    await SaveModel();
    await UpdateModel(10);
    await RemoveModel(100);
}

async function FindModel(id?: number) {
    return await id
        ? PostModel.findById(11)
        : PostModel.find();
}
async function SaveModel() {
    const model = PostModel.builder().setBody(1);
    try {
        await model.save();
    } catch (err) {
    }
    model.setTitle("try");
    try {
        await model.save().then(res => console.log("Saved successfully"));
    }catch(err) {}
    model.setBody("I'm good");
    await model.save().then(res => console.log("Saved successfully"));

}

async function UpdateModel(id:number) {
    return await PostModel.updateById(id, {title: "try me"});
}

async function RemoveModel(id:number) {
    return await PostModel.removeById(id);
}


main()
    .then(() => {
        console.log("Completed");
    });