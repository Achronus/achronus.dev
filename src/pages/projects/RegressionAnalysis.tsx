import Figure from "@/components/Figure";
import ListItems from "@/components/ListItems";
import { ContentSection } from "@/components/sections";
import Image from "next/image";
import Link from "next/link";

const RegressionAnalysis = () => {
  return (
    <>
      <ContentSection title="What is the Project?">
        <p className="paragraph">
          Regression Analysis is one of the fundamental techniques used in
          Supervised Learning and is essential in statistical modelling. It
          provides a reliable way of identifying the relationship between a
          dependent variable (outcome) and one or more independent variables
          (predictors).
        </p>
        <p className="paragraph">
          Within this project, we focus on analysing city-cycle fuel consumption
          in miles per gallon (MPG). The data is stored within a CSV file called{" "}
          <code className="code-snippet">car_data</code>, containing 406 data
          points and 9 variables. The variable list is as follows:{" "}
          <code className="code-snippet">MPG</code>,{" "}
          <code className="code-snippet">cylinders</code>,{" "}
          <code className="code-snippet">displacement</code>,{" "}
          <code className="code-snippet">horsepower</code>,{" "}
          <code className="code-snippet">weight</code>,{" "}
          <code className="code-snippet">acceleration</code>,{" "}
          <code className="code-snippet">modelYear</code>,{" "}
          <code className="code-snippet">origin</code>, and{" "}
          <code className="code-snippet">carName</code>.
        </p>
        <p className="paragraph">
          Using the MATLAB programming language, the implementation provides a
          statistical analysis of the data without the help of built-in
          functions. The program has been divided into four files, each covering
          a single component: data pre-processing, statistical analysis,
          regression analysis, and the visualisation of the results.
        </p>
      </ContentSection>

      <ContentSection title="Data Pre-Processing">
        <p className="paragraph">
          The first step of the project involved reviewing the data and handling
          any missing entries. The process starts by iterating over each row of
          data, storing it into a table called{" "}
          <code className="code-snippet">car_data</code>, and then assigning its
          respective data type (double or string). With the data successfully
          imported into MATLAB, we can now begin handling the missing entries.
          There are a total of 14 missing values, 8 for MPG and 6 for
          horsepower.
        </p>
        <p className="paragraph">
          Handling missing data isn't always easy. Swalin (2018) explains that
          there are three common reasons for missing data entries:
        </p>
        <ListItems
          className="paragraph"
          items={[
            "Missing at random (MAR) - there is a slight relation to the observed data.",
            "Missing completely at random (MCAR) - there is no relation to any of the data.",
            "Missing not at random (MNAR) - the missing values depend on hypothetical values (e.g. not revealing your income) or other variable values.",
          ]}
        />
        <p className="paragraph">
          When handling MAR and MCAR data, values can be freely deleted or
          imputed. However, when working with MNAR data, removing the
          observations can lead to bias in the model. The 14 entries that are
          missing fall into the first two categories, allowing for modification.
          Due to the small size of the dataset, I implemented the imputation
          method using the respective columns' mean value. With only 406 data
          points, there is a limit to the amount of training data available and
          losing 14 entries could negatively impact the model's results.
        </p>
      </ContentSection>

      <ContentSection title="Analysis">
        <p className="paragraph">
          The analysis focuses on four independent variables:{" "}
          <code className="code-snippet">mpg</code>,{" "}
          <code className="code-snippet">horsepower</code>,{" "}
          <code className="code-snippet">weight</code>, and{" "}
          <code className="code-snippet">acceleration</code>, and covers five
          critical statistics: <code className="code-snippet">mean</code>,{" "}
          <code className="code-snippet">median</code>,{" "}
          <code className="code-snippet">minimum value</code>,{" "}
          <code className="code-snippet">maximum value</code>, and the{" "}
          <code className="code-snippet">standard deviation</code> (std).
        </p>
        <p className="paragraph">
          The results for each variable are stored within a table called{" "}
          <code className="code-snippet">statistics</code>, found in figure 3.1,
          providing an insight into the scope of the data. When comparing the
          variables, it is clear that weight has the widest spread of data.
        </p>
        <Figure
          src="/project/regression/linear/stats_table.png"
          alt="stats table"
          width={500}
          height={136}
          caption="Figure 3.1. Statistics table"
        />
        <p className="paragraph">
          Taking this one step further, we can visualise the data using box
          plots (figure 3.2). Box plots provide a clear indication of the
          distribution and skewness of the data. It provides a visual
          representation of outliers in the data (circles), the maximum and
          minimum values (top and bottom lines, respectively), the medium (red
          line), the upper (Q3) and lower (Q1) quartiles, represented by the top
          and bottom of the box, respectively, and lastly the interquartile
          range (IQR) reflected by the height of the box.
        </p>
        <Figure
          src="/project/regression/linear/box_plots.png"
          alt="box plots"
          width={500}
          height={400}
          caption="Figure 3.2. Box plots for each variable"
        />
        <p className="paragraph">
          Using the box plots, we can immediately identify that horsepower and
          acceleration have a lot of outliers. Also, three of the four variables
          (MPG, weight, and horsepower) have a greater spread of higher values
          when compared to their medians.
        </p>
        <p className="paragraph">
          These statistics are not the only method for gaining an understanding
          of our data. We can also use a correlation matrix (figure 3.3) to
          identify the relationship between variables. Figure 3.3 provides the
          results of the Pearson correlation coefficient, which measures the
          linear association between variables, where the value range is between{" "}
          <code className="code-snippet">-1</code> to{" "}
          <code className="code-snippet">+1</code>. The metric provides three
          extremes: <code className="code-snippet">-1</code>,{" "}
          <code className="code-snippet">0</code>, and{" "}
          <code className="code-snippet">+1</code>.
        </p>
        <ListItems
          className="paragraph"
          items={[
            <>
              <code className="code-snippet">-1</code> provides a perfect
              negative linear correlation
            </>,
            <>
              <code className="code-snippet">0</code> states there is no linear
              correlation, and,
            </>,
            <>
              <code className="code-snippet">+1</code> is a perfect positive
              linear correlation
            </>,
          ]}
        />
        <p className="paragraph">
          A positive correlation signifies that the variables are moving in the
          same direction. Similarly, a negative correlation states that the
          variables are moving in the opposite direction.
        </p>
        <Figure
          src="/project/regression/linear/correlation_matrix.png"
          alt="correlation matrix"
          width={500}
          height={130}
          caption="Figure 3.3. Correlation matrix"
        />
        <p className="paragraph">
          Reviewing the correlation table, it is clear that{" "}
          <code className="code-snippet">acceleration</code> isn't as highly
          correlated (positive or negatively) as the other three variables.{" "}
          <code className="code-snippet">Weight</code> has the highest negative
          correlation with <code className="code-snippet">MPG</code> and the
          highest positive correlation with{" "}
          <code className="code-snippet">horsepower</code>. However,{" "}
          <code className="code-snippet">MPG</code> also has a high negative
          correlation with <code className="code-snippet">horsepower</code> and
          has a medium positive correlation with{" "}
          <code className="code-snippet">acceleration</code>. Some of the
          correlations are visualised in the regression graphs in figures 3.4.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            src="/project/regression/linear/lr_acc_vs_mpg.png"
            alt="Accuracy vs MPG"
            width={500}
            height={300}
            className="rounded-md"
          />
          <Image
            src="/project/regression/linear/lr_hp_vs_mpg.png"
            alt="Horsepower vs MPG"
            width={500}
            height={300}
            className="rounded-md"
          />
          <Image
            src="/project/regression/linear/lr_w_vs_hp.png"
            alt="Weight vs MPG"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Figure 3.4. Linear regressions that show comparisons between the core
          variables.
        </p>
        <p className="paragraph">
          Overall, the regression graphs show the relationship between select
          variables from the correlation matrix. In the first graph, we compare
          the acceleration against the MPG, which shows that the data is widely
          spread apart with a slight positive correlation around the central
          points. In the second and third graphs, comparing horsepower vs MPG
          and then against weight, there is a clear negative and positive
          correlation between the two.
        </p>
      </ContentSection>

      <ContentSection title="References">
        <p className="paragraph">
          Swalin, A. (2018) How to Handle Missing Data.{" "}
          <i>Towards Data Science.</i> Available from{" "}
          <Link
            href="https://towardsdatascience.com/how-to-handle-missing-data-8646b18db0d4"
            className="text-link"
          >
            https://towardsdatascience.com/how-to-handle-missing-data-8646b18db0d4
          </Link>
          .
        </p>
      </ContentSection>
    </>
  );
};

export default RegressionAnalysis;
