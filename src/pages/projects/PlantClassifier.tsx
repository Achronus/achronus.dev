import Figure from "@/components/Figure";
import StaticTable from "@/components/StaticTable";
import Link from "next/link";

type ClassItem = {
  name: string;
  count: number;
};

const columns = ["Name", "Count"];

const classes1: ClassItem[] = [
  { name: "Alfalfa", count: 470 },
  { name: "Allium", count: 481 },
  { name: "Borage", count: 500 },
  { name: "Burdock", count: 460 },
  { name: "Calendula", count: 500 },
  { name: "Cattail", count: 466 },
  { name: "Chickweed", count: 488 },
  { name: "Chicory", count: 500 },
  { name: "Chive blossoms", count: 455 },
  { name: "Coltsfoot", count: 500 },
  { name: "Common mallow", count: 439 },
  { name: "Common milkweed", count: 469 },
];

const classes2: ClassItem[] = [
  { name: "Common vetch", count: 451 },
  { name: "Common yarrow", count: 474 },
  { name: "Coneflower", count: 500 },
  { name: "Cow parsley", count: 500 },
  { name: "Cowslip", count: 442 },
  { name: "Crimson clover", count: 400 },
  { name: "Crithmum maritimum", count: 433 },
  { name: "Daisy", count: 490 },
  { name: "Dandelion", count: 500 },
  { name: "Fennel", count: 452 },
  { name: "Fireweed", count: 500 },
];

const classes3: ClassItem[] = [
  { name: "Gardenia", count: 500 },
  { name: "Garlic mustard", count: 409 },
  { name: "Geranium", count: 500 },
  { name: "Ground ivy", count: 408 },
  { name: "Harebell", count: 500 },
  { name: "Henbit", count: 500 },
  { name: "Knapweed", count: 500 },
  { name: "Meadowsweet", count: 456 },
  { name: "Mullein", count: 500 },
  { name: "Pickerelweed", count: 454 },
  { name: "Ramsons", count: 489 },
  { name: "Red clover", count: 449 },
];

const PlantClassifier = () => {
  return (
    <>
      <p className="paragraph mb-6 my-4">
        This project focuses on a Wild Edible Plant Classifier that compares the
        performance of three state-of-the-art CNN architectures: MobileNet v2,
        GoogLeNet, and ResNet-34. The artefact created is part of my BSc
        dissertation, aimed at classifying 35 classes of wild edible plants
        using Transfer Learning.
      </p>

      <Figure
        src="/project/plant-classifier/class-sample.png"
        width={800}
        height={500}
        alt="Plant classes"
        caption="Figure 1. The 35 wild edible plant classes used in the project"
      />

      <p className="paragraph my-4">
        The 35 classes of wild edible plants are listed in table 1, accompanied
        by the number of images (per class) within the dataset. The dataset
        created is composed of Flickr images, obtained through their API using
        the rudimentary scripts within the{" "}
        <code className="code-snippet">\data_gathering</code> folder. The
        dataset can be found on{" "}
        <Link
          href="https://www.kaggle.com/datasets/ryanpartridge01/wild-edible-plants"
          className="text-link"
        >
          Kaggle
        </Link>{" "}
        and contains 16,535 images, where the quantity of images per class
        varies from 400 to 500.
      </p>

      <div className="hidden md:flex justify-between items-start gap-10">
        <StaticTable columns={columns} values={classes1} />
        <StaticTable columns={columns} values={classes2} />
        <StaticTable columns={columns} values={classes3} />
      </div>
      <p className="hidden md:block text-center text-sm text-gray-500 mt-2 mb-4">
        A detailed list of the Wild Edible Plant classes with the number of
        images per class within the dataset.
      </p>

      <p className="paragraph my-4">
        The project is divided into three Jupyter Notebooks. The first one
        contains a sample of the plant classes to visualise them, stored within
        a zip file found inside the dataset folder, and covers steps 4 to 6 in
        the Machine Learning Pipeline diagram (figure 2). The second notebook
        focuses on the tuning of the CNN models, and the third and final
        notebook visualises their results.
      </p>

      <Figure
        src="/project/plant-classifier/ml-pipeline.png"
        width={800}
        height={500}
        alt="Plant classes"
        caption="Figure 2. Machine Learning Pipeline diagram"
      />

      <p className="paragraph my-4">
        The dissertation report (in pdf format) is on the{" "}
        <Link
          href="https://github.com/Achronus/wep-classifier/blob/main/wepc-dissertation-report.pdf"
          className="text-link"
        >
          GitHub repository
        </Link>
        . A copy of its abstract is highlighted below.
      </p>

      <p className="paragraph italic my-4">
        Maintaining a steady flow of food is becoming increasingly difficult.
        With the global population predicted to reach 9.6 billion by 2050, new
        food sources are required. The research conducted in this paper shows
        that Deep Learning (DL) applications can improve the quantity and
        quality of harvests produced when using disease identification and plant
        recognition techniques.
      </p>
      <p className="paragraph italic my-4">
        However, they have not yet been used to identify natural vegetation as a
        potential food source. This study aims to understand the role DL plays
        in agricultural food production, expand DLs use within horticulture, and
        potentially identify new food sources within natural environments for
        daily consumption. Throughout this paper, various toolsets, machine
        environments, and research methods are discussed, assisting in
        determining the best methodology for creating an artefact that
        identifies wild edible plants. While the artefact focuses on three
        state-of-the-art Convolutional Neural Networks (CNNs), additional
        information found within this report includes the components of CNNs,
        accompanied by the design and development of the artefact itself.
      </p>
      <p className="paragraph italic my-4">
        The three architectures, GoogLe-Net, MobileNet v2, and ResNet-34, were
        built using the open-source deep learning framework PyTorch, where 36
        variants of these models were created and tested using 12 different
        parameters. The model's performance was evaluated based on six
        performance metrics to classify 35 classes of wild edible plants, each
        trained and tested on a dataset containing 16,535 images. Overall,
        achieving classification accuracies of 74.29%, 82.85%, and 80.35%, for
        GoogLeNet, MobileNet v2, and ResNet-34, respectively.
      </p>
    </>
  );
};

export default PlantClassifier;
